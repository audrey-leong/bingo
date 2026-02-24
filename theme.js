/**
 * Theme Configuration for Bingo 2026
 * 
 * This file contains all the visual styling configuration for the bingo app.
 * Modify the values below to customize colors, fonts, spacing, and other design elements.
 * 
 * Usage: This file is loaded before the main React components and provides
 * the THEME object that's used throughout the application.
 */

// ============================================
// THEME CONFIGURATION - Edit colors and styles here
// ============================================
const THEME = {
  colors: {
    primary: '#2401FA',        // Main brand color (title)
    background: '#ffffff',     // Page background
    cardBackground: '#FFFBF0', // Modal/detail background
    
    // Status colors
    notStarted: {
      bg: '#ffffff',
      border: '#2401FA',  // gray-300
    },
    inProgress: {
      bg: '#BEFA00',      // Base yellow color
      border: '#BEFA00',  // yellow-400
      backgroundImage: 'repeating-linear-gradient(45deg, #BEFA00 0px, #BEFA00 2px, #ffffff 1px, #ffffff 5px)', // Diagonal stripes
    },
    completed: {
      bg: '#BEFA00',      // green-100
      border: '#BEFA00',  // green-400
    },
    
    // Status indicator bar
    statusBar: {
      notStarted: '#2401FA',  // gray-400
      inProgress: '#FAD900',  // yellow-500
      completed: '#BEFA00',   // green-500
    },
    
    // UI elements
    titleHover: '#2563eb',  // blue-600
    titleDefault: '#1E3A8A', // blue-900
    overlayBg: 'rgba(0, 0, 0, 0.5)',
  },
  
  spacing: {
    gridContainer: {
      maxWidth: '47rem',        // max-w-2xl (640px) - smaller than default max-w-4xl (768px)
    },
    gridGap: {
      mobile: '0.25rem',    // 1 (gap-1)
      tablet: '0.5rem',     // 2 (gap-2)
      desktop: '0.75rem',   // 3 (gap-3)
      large: '1rem',        // 4 (gap-4)
    },
    cardPadding: {
      mobile: '0.25rem',    // p-1
      tablet: '0.5rem',     // p-2
      desktop: '0.75rem',   // p-3
    },
    modalPadding: {
      small: '1rem',        // p-4
      medium: '1.5rem',     // p-6
      large: '2rem',        // p-8
    },
  },
  
  borders: {
    gridCard: {
      mobile: '2px',
      tablet: '3px',
      desktop: '4px',
    },
    modalTop: '4px',
    statusButton: '2px',
  },
  
  borderRadius: {
    card: {
      mobile: '0rem',   // rounded-md
      tablet: '0rem',     // rounded-lg
    },
    modal: '0.75rem',       // rounded-xl
    statusBar: '9999px',    // rounded-full
    button: '9999px',       // rounded-full
  },
  
  typography: {
    mainTitle: {
      fontFamily: 'Copperplate, sans-serif',  // Font for the main page title
      fontWeight: 'regular',                     // Font weight
      color: '#2401FA',                       // Same as primary color
      fontSize: {
        mobile: '1.875rem',                   // text-3xl
        tablet: '2.25rem',                    // text-4xl (sm:)
        desktop: '3rem',                      // text-5xl (md:)
        large: '3.75rem',                     // text-6xl (lg:)
      },
      textAlign: 'center',
      marginBottom: {
        mobile: '2rem',                       // mb-8
        tablet: '3rem',                       // mb-12 (sm:)
      },
    },
    title: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 'clamp(0.45rem, 1.8vw, 0.85rem)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.3px',
    },
    heading: {
      fontFamily: 'Blur, sans-serif',
      fontWeight: 'bold',
    },
    notes: {
      fontFamily: 'Georgia, serif',
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      lineHeight: '1.8',
    },
    label: {
      fontFamily: 'Arial, sans-serif',
    },
  },
  
  effects: {
    cardHover: {
      scale: '1.05',
      // shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
    },
  },
  
  // Pop-up Notes Cards (Modal) Styling
  modal: {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '50',
    },
    container: {
      backgroundColor: '#FFFFFF',   // Same as cardBackground
      borderRadius: '0rem',      // rounded-xl
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '48rem',            // max-w-3xl (768px)
      maxHeight: '100vh',            // Maximum height as 80% of viewport height
      height: 'auto',               // Auto height to expand with content
    },
    header: {
      backgroundColor: '#FFFFFF',   // Same as cardBackground
      borderBottomWidth: '1px',
      borderBottomColor: '#2401FA', // gray-300
      borderBottomStyle: 'solid',
      padding: {
        mobile: '1rem',             // p-4
        desktop: '1.5rem',          // p-6
      },
      statusBar: {
        width: {
          mobile: '0.25rem',        // w-1
          desktop: '0.5rem',        // w-2
        },
        height: {
          mobile: '3rem',           // h-12
          desktop: '4rem',          // h-16
        },
        marginRight: {
          mobile: '0.75rem',        // mr-3
          desktop: '1rem',          // mr-4
        },
        borderRadius: '9999px',     // rounded-full
      },
      title: {
        fontFamily: 'Playfair, serif',
        fontSize: {
          mobile: '1.25rem',        // text-xl
          tablet: '1.5rem',         // text-2xl
          desktop: '1.875rem',      // text-3xl
        },
        fontWeight: 'Extrabold',
        color: '#2401FA',           // blue-900 (titleDefault)
        colorHover: '#4F46E5',      // blue-600 (titleHover)
      },
      closeButton: {
        padding: '0.5rem',          // p-2
        marginLeft: {
          mobile: '0.5rem',         // ml-2
          desktop: '1rem',          // ml-4
        },
        borderRadius: '9999px',     // rounded-full
        backgroundColor: 'transparent',
        backgroundColorHover: '#e5e7eb', // hover:bg-gray-200
      },
    },
    content: {
      spacing: '1rem 1.5rem',       // space-y-4 sm:space-y-6 with padding
      padding: {
        mobile: '1rem',             // p-4
        desktop: '1rem',            // Keep same for content
      },
    },
    textarea: {
      fontFamily: 'Libre Baskerville, serif',
      fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
      lineHeight: '1.6',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: {
        mobile: '0.75rem',          // p-3
        desktop: '1rem',            // p-4
      },
      minHeight: {
        mobile: '42rem',            // min-h-[832px] - taller than width (768px)
        desktop: '48rem',           // min-h-[896px] - even taller for desktop
      },
      placeholder: {
        color: '#6b7280',           // text-gray-500
      },
    },
  },
};
