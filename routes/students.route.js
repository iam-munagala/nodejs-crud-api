const express = require("express");
const router = express.Router();
const User = require("../models/student.model")

const {createStudent, getStudents, getStudent, deleteStudent, updateStudent} = require("../controllers/student.controller")


// get all students data
router.get('/', getStudents);

router.get("/:id", getStudent);

router.post("/", createStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);



module.exports= router;