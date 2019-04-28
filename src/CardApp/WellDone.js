import React, { useEffect, useContext } from 'react'
import { Box, Text } from '../components'
import styled from 'styled-components'
import { confetti } from 'dom-confetti'
import { DeckContext } from '../App'

const paraProps = {
  mt: '2.2rem',
  fontSize: '2.2rem',
  fontWeight: '300',
}

const StyledButton = styled.a`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 4.6rem;
  margin-top: 4rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
`

const WellDone = () => {
  const { myTop3 } = useContext(DeckContext)

  useEffect(() => {
    confetti(document.getElementById('confetti-target'), {
      spread: '100',
    })
  }, [])

  // const test = [
  //   {
  //     key: '29',
  //     image_path: 'static/card_images/card_29.png',
  //     alt: '',
  //     variant: '#DB2727',
  //     en: {
  //       title: 'Inspire through art',
  //       blurb_1:
  //         'Humanity is constantly challenged to define itself and to move forward. Artists play a crucial role in observing, creating and shaping our society. Through their art, they inspire ideas, evoke emotions and challenge points of view. How could you change the world if you expressed yourself authentically?',
  //       careers: [
  //         'Industrial Designer',
  //         'Animator',
  //         'Illustrator',
  //         'Graphic Designer',
  //         'Art Therapist',
  //         'Painter',
  //         'Sculptor',
  //         'Muralist',
  //         'Museum Curator',
  //         'Arts Administrator',
  //         'Art Dealer',
  //         'Interior Designer',
  //       ],
  //       blurb_2:
  //         'Artists are antennas to their environments. They have an opportunity to give a voice to the voiceless, reflect the human experience, and help us think critically about ourselves and our surroundings. Some artists want to make the world more visually appealing, while others want to create meaningful entertainment. They can also find ways to transport their fans to new worlds. What can you create that no one has imagined before? What can you re-invent into something brand new?',
  //     },
  //     fr: {
  //       title: 'Inspirer à travers l’art',
  //       blurb_1:
  //         "L'hummanité doit constamment se redéfinir et aller de l'avant. En tant qu’observateurs, créateurs et bâtisseurs, les artistes jouent un rôle clé dans notre société. Les artistes inspirent des idées, suscitent des émotions et remettent en question nos points de vue. Comment pourriez-vous changer le monde si vous vous exprimiez de façon authentique?",
  //       careers: [
  //         'Concepteur industriel',
  //         'Dessinateur',
  //         'Illustrateur',
  //         'Concepteur graphique',
  //         'Art-thérapeute',
  //         'Peintre',
  //         'Sculpteur',
  //         'Muraliste',
  //         'Conservateur de musée',
  //         'Gestionnaire artistique',
  //         "Marchand d'ceuvres d'art",
  //         'Technologue-métallurgiste',
  //         'Animateur',
  //       ],
  //       blurb_2:
  //         "Les artistes sont antennes de leur milieu. Ils sont le porte-voix de ceux qui n'ont pas ce privilège et font preuve d'un esprit critique à ce sujet. Certains artistes veulent rendre le monde visuellement attrayant, alors que d'autres veulent créer des divertissements. Ils peuvent être la porte d'entrée pour transporter les gens vers de nouveaux horizons. Que pouvez-vous créer que personne n'a déjà imaginé?",
  //     },
  //   },
  //   {
  //     key: '27',
  //     image_path: 'static/card_images/card_27.png',
  //     alt: '',
  //     variant: '#CA2744',
  //     en: {
  //       title: 'Master tools and machines',
  //       blurb_1:
  //         'Changes in technology have created opportunities to do more work, faster and more precisely. Tools and machines are needed to shape our surroundings and to fix problems. The creators and operators of these tools are needed to help build, organize, improve, drive and repair things. ',
  //       careers: [
  //         'Mechanic',
  //         'Engineer',
  //         'Technician',
  //         'Plumber',
  //         'Millwright',
  //         'Robot Operator',
  //         'Electrician',
  //         '3D Printer',
  //         'Nuclear Medicine Technologist',
  //         'Plant Operator',
  //         'Automotive Specialist',
  //         'Construction Professional',
  //         'Installation Expert',
  //       ],
  //       blurb_2:
  //         'There is a high demand for practical problem-solvers that can work with tools and machines. Demands could involve hands-on work, reading technical plans or solving interesting math problems. There are also opportunities for precision work, troubleshooting issues and using creativity. When working with tools and machines, you can expect to learn while you work through programs like an apprenticeship, as well as throughout your life as technology evolves.',
  //     },
  //     fr: {
  //       title: 'Maîtriser des machines et des outils',
  //       blurb_1:
  //         'Les changements technologiques mènent à des opportunités pour faire du travail toujours plus rapide et plus précis. Les machines/outils sont nécessaires pour créer nos espaces et résoudre des problémes. Les créateurs et les opérateurs de ces outils sont indispensables pour : bâtir, organiser, améliorer, conduire, réparer, etc.',
  //       careers: [
  //         'Installateur',
  //         'Réparateur',
  //         'Technicien',
  //         'Plombier',
  //         'Tuyauteur',
  //         'Menuisier',
  //         'Électricien',
  //         'Imprimeur 3D',
  //         'Opérateur de machines spéciales',
  //         'Technicien de médecine nucléaire',
  //         'Opérateur de manufacture',
  //         "Spécialiste de l'auto",
  //         'Professionnel de la construction',
  //       ],
  //       blurb_2:
  //         "Il y a une forte demande pour des individus qui peuvent résoudre des problèmes concrets avec des machines et outils. Cette demande pourrait impliquer un travail tactile, la lecture de plans technique ou la résolution de problèmes de mathématique. Il y a aussi des opputunités pour la précision, le diagnostic et la créativité. Lors du travail avec des machines et outils, vous pouvez faire un apprentissage dans le milieu de travail à titre d'apprenti et durant tout votre carrière à mesure que la technologie évolue.",
  //     },
  //   },
  //   {
  //     key: '3',
  //     image_path: 'static/card_images/card_3.png',
  //     alt: '',
  //     variant: '#50BAEA',
  //     en: {
  //       title: 'Advance Health Informatics',
  //       blurb_1:
  //         'How do we collect, store and use healthcare information? Medical records today are a mix of different technologies which unfortunately are often incompatible. There are opportunities to improve the acquisition, sharing, protection and analysis of health info to improve health care service delivery.',
  //       careers: [
  //         'Biostatistician',
  //         'Data Scientist',
  //         'Epidemiologist',
  //         'Systems or Software Engineer',
  //         'Business, Database or Information Analyst',
  //         'Project Manager',
  //         'Business Architect',
  //         'Coordinator',
  //         'Consultant',
  //       ],
  //       blurb_2:
  //         'Innovation in data analytics will shape the future of health care. For example, people will use wearable devices, such as sensors embedded in clothing or the body, that can collect new health data. This biodata will help people better understand their health habits and issues. Better health information systems improve everyday medical visits, and are also essential in fighting the spread of new diseases.',
  //     },
  //     fr: {
  //       title: 'Avancer l’informatique en santé',
  //       blurb_1:
  //         'Comment faisons-nous la collecte, l’entreposage et l’utilisation d’informations sur les soins de santé? Les dossiers médicaux d’aujourd’hui utilisent plusieurs types de technologies pas toujours compatibles entres elles. L’amélioration des services passe par le partage et l’analyse de celle-ci.',
  //       careers: [
  //         'Biostatisticien',
  //         'Scientifique des données',
  //         'Épidémiologiste',
  //         'Ingénieur de systèmes ou de logiciels',
  //         'Analyste de l’information, de base de données ou commercial',
  //         'Gestionnaire de projet',
  //         'Consultant',
  //       ],
  //       blurb_2:
  //         'L’avenir des soins de la santé sera façonné par l’innovation des statistiques avancées. Par exemple, nous viendront à utiliser des dispositifs mobiles, dont des capteurs intégrés dans les vêtements ou même dans notre corps, pour permettre la collecte d’information sur la santé. De meilleurs systèmes informatiques aideront à optimiser l’utilisation des services pour améliorer la santé de la population.',
  //     },
  //   },
  // ]

  return (
    <Box
      alignItems="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      py="4rem"
      height="100vh"
    >
      <Box
        bg="white"
        mt="-4rem"
        pb="5rem"
        pt="8rem"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          color="rgb(113,69,154)"
          lineHeight="1.2"
          mb="2rem"
          fontSize="2.6rem"
          fontWeight="600"
        >
          Yay! You made it!{' '}
          <span role="img" aria-label="celebrate emoji">
            🎉
          </span>
        </Text>

        <Box
          mt="2rem"
          flexDirection="column"
          alignItems="flex-start"
          color="black"
        >
          {myTop3.map(({ image_path, altText, variant, en, key }) => {
            const path = require(`../${image_path}`)

            return (
              <Box
                key={key}
                mt="2rem"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box
                  height="6rem"
                  width="6rem"
                  mr="3rem"
                  bg={variant}
                  justifyContent="center"
                  borderRadius="4px"
                  alignItems="center"
                >
                  <img
                    style={{ height: '5rem', width: '5rem' }}
                    src={path}
                    alt={altText}
                  />
                </Box>

                <Text
                  color="rgb(114, 114, 114)"
                  textTransform="capitalize"
                  fontSize="1.8rem"
                >
                  {en.title}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box py="5rem" flexDirection="column" px="5rem">
        <Text {...paraProps}>
          The next step is to find out what education program can help you work
          on these important challenges.
        </Text>

        <Text mt="4rem" fontSize="2rem" fontWeight="600">
          Enroll in SparkPath to get started.
        </Text>

        <StyledButton href="https://mysparkpath.com/">
          <Text
            fontSize="2rem"
            fontWeight="600"
            textTransform="uppercase"
            id="confetti-target"
          >
            Let's Do It!
          </Text>
        </StyledButton>

        <Text
          as="a"
          color="white"
          href={'http://tiny.cc/challengecards'}
          mt="4rem"
          fontSize="1.5rem"
          textDecoration="underline"
        >
          Give your feedback
        </Text>
      </Box>
    </Box>
  )
}

export default WellDone
