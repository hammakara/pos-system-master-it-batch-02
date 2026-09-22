export const Roles = (...allowedRole) =>(req,res,next)=>{
    const {role} = req.user
    if(role=="admin" || allowedRole.includes(role)){
        return next()
    }
    return res.status(401).json({
        success:false,
        error:"Unauthorize"
    })
}