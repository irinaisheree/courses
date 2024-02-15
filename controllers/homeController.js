const router = require("express").Router()
const courseManager = require("../managers/courseManager")

    
router.get("/", async(req, res) => {
    const courses =  await courseManager.getThree().lean()
    res.render("home", {courses})
})



module.exports = router