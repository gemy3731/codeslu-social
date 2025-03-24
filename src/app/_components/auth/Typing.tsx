'use client'
import { Typewriter } from 'react-simple-typewriter'

const Typing = () => {
  return (
    <div>
        <h1 className="text-4xl font-extrabold  mb-6  text-white">
        <Typewriter
          words={[
            'Connect with people who vibe like you 🌍',
            'Start conversations that matter 💬',
            'Your new digital hangout is here 🏠',
            'Moments are better when shared 📸',
            'Grow your circle, grow your world 🌱',
            'Where friendships meet opportunities 🤝',
            'Spark real-time conversations ⚡',
            'Create, share, and inspire daily ✨',
            'Welcome to your social playground 🛝',
            'Stay in the loop, always 🔔',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </h1>
    </div>
  )
}

export default Typing