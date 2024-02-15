const Course = require('../models/Course');
const User = require('../models/User')

exports.getOne = (courseId) => Course.findById(courseId)
exports.getThree = () => Course.find().sort({ _id: -1 }).limit(3)
exports.getAll = () => Course.find()

exports.getOneWithOwner = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList')

exports.create = async (userId, courseData) => {
    const createdCourse = Course.create({
        owner: userId,
        ...courseData
    })

    await User.findByIdAndUpdate(userId, {$push: {createdCourses: createdCourse._id}})
    return createdCourse
}

exports.signUp = async(courseId, userId) => {
//    const course = await Course.findById(courseId)
//    const user = await User.findById(userId)

//    course.signedUpList.push(userId)
//    user.signedUpCourses.push(courseId)

//    await course.save()
//    await user.save()

// same logic - I can choose one or another

await Course.findByIdAndUpdate(courseId, {$push: {signedUpList : userId}})
await User.findByIdAndUpdate(userId, {$push: {signedUpCourses : courseId}})
return {Course, User}
}