import React from "react"
import { Box, Heading } from "rebass"
import Project from "./Project"
import sudoku from "../images/sudoku.png"
import faceapp from "../images/faceapp.png"
import skedoodle from "../images/skedoodle.png"

const ProjectList = () => {
  return (
    <>
      <Heading
        name="projectList"
        className="element"
        textAlign="center"
        fontSize={[4, 5, 6]}
        mb={[4, 4, 5]}
      >
        Recent Projects
      </Heading>
      <Box px={[4, 4, 5]}>
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
