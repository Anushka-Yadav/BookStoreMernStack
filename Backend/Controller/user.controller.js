import User from "../Model/user.model.js";


export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        else {
            const createdUser = new User({
                fullname,
                email,
                password
            })
            await createdUser.save()
            res.status(201).json({ message: "User created successfully" })
        }
    } catch (error) {
        console.log("error:", error)
        res.status(500).json(error)
        
    }
}