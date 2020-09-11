import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Project from "./ProjectCard"

const Projects = ({ projects }) => {
    return (
        <Box mt={6}>
            <Typography variant='h4'>Projects</Typography>
            <Grid container spacing={2}>
                {projects.map(project => {
                    return <Project project={project}></Project>
                })}
            </Grid>
        </Box>
    )
}

export default Projects;
