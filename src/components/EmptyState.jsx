import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { MdSentimentDissatisfied } from 'react-icons/md'

/**
 * Reusable Empty State Component
 *
 * Props:
 * - title: Main heading
 * - description: Subheading or message
 * - buttonText: Optional CTA button text
 * - onButtonClick: Callback for button click
 * - icon: Optional React Icon component
 */

const EmptyState = ({
  title,
  description,
  buttonText,
  onButtonClick,
  icon: Icon = MdSentimentDissatisfied,
}) => {
  return (
    <div className='h-[30vh] flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
        className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md text-center w-full h-fit"
      >
        {/* Icon */}
        <Icon className="text-6xl text-brand mb-4" />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-100">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-md">
            {description}
          </p>
        )}

        {/* CTA Button */}
        {buttonText && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="mt-6 px-6 py-2 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition"
          >
            {buttonText}
          </button>
        )}
      </motion.div>
    </div>
  )
}

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  icon: PropTypes.elementType,
}

EmptyState.defaultProps = {
  description: '',
  buttonText: '',
  onButtonClick: null,
  icon: MdSentimentDissatisfied,
}

export default EmptyState