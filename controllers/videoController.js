import { videos } from "../db.js"
import routes from "../routes.js"

export const home = (req, res) => {
    res.render('home',
        { pageTitle: "Home", videos });
}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render('search', { pageTitle: "Search", searchingBy, videos })
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" })

export const postUpload = (req, res) => {
    const { body: { file,
        text,
        description } } = req;
    //ToDo: upload and save
    res.redirect(routes.videoDetail(324393));
}


export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: "Video Detail", videos });

export const editVideo = (req, res) => res.render('editVideo',
    { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render('deleteVideo',
    { pageTitle: "Delete Video" });
