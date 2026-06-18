import UserModel from "../../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SlowHttpJob from "../../Jobs/SlowHttpJob.js";


export default async function SlowHttpController(request, response) {
    await SlowHttpJob.dispatch('executar-job',{});

    return response.status(200).json({
        response: "ok"
    });

}
