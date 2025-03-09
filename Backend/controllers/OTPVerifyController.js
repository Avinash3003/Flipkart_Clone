

export const verifyOTP = (req, res) => {
    const { email, otp,otpGenerated} = req.body;

    // console.log(otp, otpGenerated)

    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

    if (otpGenerated === Number(otp)) {
        res.status(200).json({ message: "OTP verified successfully" });
    } else {
        res.status(400).json({ message: "Invalid OTP or expired" });
    }
};
