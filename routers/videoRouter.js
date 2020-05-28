import express from "express";
import routes from "../routes.js"
import { videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, postUpload)

videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.deleteVideo, deleteVideo)

export default videoRouter;
