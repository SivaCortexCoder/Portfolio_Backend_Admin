import Project from "../models/projectSchema.js";


export const viewProjects = async(req,res)=>{
  try {
    const allProjects = await Project.find()
    res.status(200).json({allProjects})
    
  } catch (error) {
    console.error(error)
    res.status(500).json({message:'Something went wrong'})
    
  }
}

export const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      imagelink1,
      imagelink2,
      imagelink3,
      tech,
      githublink,
      livelink,
      detailedDescription,
      features,
      featured,
    } = req.body;

    console.log("Received Project Data:", req.body);

    const newProject = new Project({
      title,
      description,
      imagelink1,
      imagelink2,
      imagelink3,
      tech,
      githublink,
      livelink,
      detailedDescription,
      features,
      featured,
    });

    await newProject.save();

    res
      .status(201)
      .json({ message: "Project added successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res
      .status(200)
      .json({ message: "Project deleted successfully", project: deletedProject });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};