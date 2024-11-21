import React, { createContext, useContext, useReducer } from 'react';
import { marketingPaths } from '../data/marketingPaths';

const MarketingChatContext = createContext();

const initialState = {
  messages: [],
  paths: marketingPaths,
  currentPath: null,
  currentLesson: 0,
  currentStep: 0
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'SELECT_PATH':
      const path = state.paths[action.payload];
      return {
        ...state,
        currentPath: path,
        currentLesson: 0,
        currentStep: 0,
        messages: [{
          content: `Welcome to ${path.title}! 🎉\n${path.description}. Ready to start learning?`,
          sender: 'bot',
          options: [
            {
              text: "Let's begin! 🚀",
              action: () => startLesson(path.lessons[0])
            }
          ]
        }]
      };
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        paths: {
          ...state.paths,
          [state.currentPath.id]: {
            ...state.paths[state.currentPath.id],
            progress: action.payload
          }
        }
      };
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        paths: {
          ...state.paths,
          [state.currentPath.id]: {
            ...state.paths[state.currentPath.id],
            achievements: state.paths[state.currentPath.id].achievements.map(
              achievement => achievement.id === action.payload
                ? { ...achievement, unlocked: true }
                : achievement
            )
          }
        }
      };
    default:
      return state;
  }
}

export function MarketingChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const selectPath = (pathId) => {
    dispatch({ type: 'SELECT_PATH', payload: pathId });
  };

  const sendMessage = (content) => {
    // Add user message
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { content, sender: 'user' }
    });

    // Get current lesson and step
    const currentLesson = state.currentPath?.lessons[state.currentLesson];
    const currentStep = currentLesson?.steps[state.currentStep];

    if (currentStep?.options) {
      const nextStep = currentStep.options.find(
        option => option.text.toLowerCase() === content.toLowerCase()
      )?.nextStep;

      if (nextStep !== undefined) {
        const nextStepContent = currentLesson.steps[nextStep];
        dispatch({
          type: 'ADD_MESSAGE',
          payload: {
            content: nextStepContent.content,
            sender: 'bot',
            options: nextStepContent.options
          }
        });

        // Update progress
        const progress = Math.min(
          ((nextStep + 1) / currentLesson.steps.length) * 100,
          100
        );
        dispatch({ type: 'UPDATE_PROGRESS', payload: progress });

        // Check for achievements
        if (progress >= 30 && !state.currentPath.achievements[0].unlocked) {
          dispatch({
            type: 'UNLOCK_ACHIEVEMENT',
            payload: state.currentPath.achievements[0].id
          });
        }
      }
    }
  };

  // Initialize chat
  React.useEffect(() => {
    if (state.messages.length === 0 && !state.currentPath) {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          content: "👋 Welcome to Marketing Skills Bot!\n\nChoose a learning path to begin your journey:",
          sender: 'bot'
        }
      });
    }
  }, []);

  return (
    <MarketingChatContext.Provider value={{ 
      ...state, 
      sendMessage,
      selectPath
    }}>
      {children}
    </MarketingChatContext.Provider>
  );
}

export function useMarketingChat() {
  return useContext(MarketingChatContext);
}