import { TagCloud } from '@frank-mayer/react-tag-cloud'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import './Skills.scss'

const data = [
  'C++',
  'JavaScript',
  'CSS',
  'HTML',
  'React',
  'GIT',
  'Node.js',
  'MySQL',
  'MongoDB',
  'TypeScript',
  'SASS',
  'Bootstrap',
  'MaterialUI',
  'Express.js',
]

export const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills & Experience'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like
            <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">jQuery</span>,
            <span className="tech-tag">TypeScript</span>,
            <span className="tech-tag">ReactJs</span>,
            <span className="tech-tag">NodeJs</span>,
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">Sass</span>,
            <span className="tech-tag">Git</span>, etc.
          </p>
          <p>
            I'm not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I guarantee a commitment during work on your projects.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/harsh-anand-3446141b0"
            >
              LinkedIn{' '}
            </a>
            profile for more details. Also you can checkout my resume on this
            <a target="_blank" rel="noreferrer" href="https://bit.ly/3XXty3j">
              link
            </a>
            .
          </p>
        </div>
        <div className="skills-wrapper">
          <TagCloud
            options={(window) => ({
              radius: Math.min(500, window.innerWidth, window.innerHeight) / 2,
              maxSpeed: 'fast',
            })}
          >
            {data}
          </TagCloud>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
