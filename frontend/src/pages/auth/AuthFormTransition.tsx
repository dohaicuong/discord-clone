import { useSpring, animated } from 'react-spring'

const AuthFormTransition: React.FC = ({ children }) => {
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 400 } })

  return (
    <animated.div
      style={{
        width: '100%',
        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
        transform: x
          .to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [0.97, 0.9, 1]
          })
          .to(x => `scale(${x})`)
    }}>
      {children}
    </animated.div>
  )
}
export default AuthFormTransition
