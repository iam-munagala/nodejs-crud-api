const User = require("../models/student.model");

const getStudents = async (req, res) => {
    try {
        const students = await User.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createStudent = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await User.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            res.status(400).json({ "message": "student record not found" })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            res.status(400).json({ "message": "student not found" });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    createStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updateStudent
};