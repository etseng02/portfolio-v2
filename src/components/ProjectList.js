import React from "react"
import { Box, Heading, Flex } from "rebass"
import Project from "./Project"
import sudoku from "../../public/static/sudoku.png"
import faceapp from "../../public/static/faceapp.png"
import skedoodle from "../../public/static/skedoodle.png"

const ProjectList = () => {
  return (
    <>
      <Box
        //maxWidth="72rem"
        // px="32px"
        px={[4, 4, 5]}
        //margin="auto"
      >
        {/* <Flex>
          <Heading mb={[4, 4, 4]} fontSize={[4, 5, 5]} mx="auto">
            Projects
          </Heading>
        </Flex> */}
        <Project
          title="Sudoku Solver"
          description="A sudoku solver designed so that users can input solvable sudokus and obtain the final answer."
          image={sudoku}
          websiteUrl="https://solvesudoku.netlify.app/"
          githubUrl="https://github.com/etseng02/sudoku"
          techStack={["React", "Javascript"]}
        />
        <Project
          title="Face App"
          description="A web application that will accept a picture and return the same picture with all the faces identified with a box. If the application recognizes a face it will display the name of the person. If not, it will return unknown."
          image={faceapp}
          githubUrl="https://github.com/etseng02/faceapp"
        />
        <Project
          title="Skedoodle"
          description="A multiplayer, mobile focused, party game modelled off Telestrations the board game."
          image={skedoodle}
          githubUrl="https://github.com/etseng02/illustrations"
        />
      </Box>
    </>
  )
}

export default ProjectList
