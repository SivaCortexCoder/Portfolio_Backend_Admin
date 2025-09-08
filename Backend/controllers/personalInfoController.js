import PersonalInfo from "../models/PersonalInfoSchema.js";

export const getPersonalInfo = async (req, res) => {
  try {
    const info = await PersonalInfo.findOne();
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ message: "Error fetching info", error });
  }
};

export const updatePersonalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = await PersonalInfo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedInfo) {
      return res.status(404).json({ message: "Personal info not found" });
    }
    res.status(200).json({ message: "Personal info updated successfully", info: updatedInfo });
  } catch (error) {
    res.status(500).json({ message: "Error updating info", error });
  }
};
