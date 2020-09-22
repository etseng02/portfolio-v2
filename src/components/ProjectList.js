import React from "react"
import { Box, Heading } from "rebass"
import Project from "./Project"

const ProjectList = () => {
  return (
    <>
      <Box maxWidth="72rem" px="32px" margin="auto">
        <Heading mb={[4, 4, 4]} fontSize={[4, 5, 5]}>
          Projects
        </Heading>
        <Project
          title="Sudoku Solver"
          description="A sudoku solver designed so that users can input solvable sudokus and obtain the final answer."
          image="https://source.unsplash.com/random/512x384?space"
        />
        <Project
          title="Face App"
          description="A web application that will accept a picture and return the same picture with all the faces identified with a box. If the application recognizes a face it will display the name of the person. If not, it will return unknown."
          image="https://source.unsplash.com/random/512x384?space"
        />
        <Project
          title="Sudoku Solver"
          description="A sudoku solver designed so that users can input solvable sudokus and obtain the final answer."
          image="https://source.unsplash.com/random/512x384?space"
        />
      </Box>
    </>
  )
}

export default ProjectList
