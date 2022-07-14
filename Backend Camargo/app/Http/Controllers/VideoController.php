<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Video;
use App\Models\Project;
use Error;

class VideoController extends Controller
{
    public function saveNewVideo(Request $request){
        if($request->hasFile('video') && $request->file('video')->isValid()){
            $video = new Video;
            $videosProject = Project::where([['NameProject','=',"$request->nameproject"]])->get()->first();
            
            $pathVideoProject = $videosProject->Type == "machine" ? "VideoMachines": "VideoProjects";
            $extension = $request->video->extension();
            $videoName = md5($request->video->getClientOriginalName() . strtotime("now")). '.' . $extension;
            $request->video->move(public_path("video/$pathVideoProject"),$videoName);
            
            $video->NameVideo = $videoName;
            $video->project_id = $videosProject->id;
            $video->Description = $request->descriptionvideo;
            
            if($video->save())return "Video adicionado ao projeto $request->nameproject com sucesso";
            else return "Falha ao adicionar novo video ao projeto";
        }
        return "Falha ao adicionar nova vídeo ao projeto";
    }

    public static function removeVideos($name){
        $project = Project::where([['NameProject','=',$name]])->get()->first();
        $arrVideos = Video::where([['project_id','=',$project->id]])->get();
        foreach($arrVideos as $video){
            try{
                unlink(public_path("video/VideoMachines/$video->NameVideo"));
            }catch(Error $err){
                unlink(public_path("video/VideoProjects/$video->NameImage"));
            }
        }
        Video::where([['project_id','=',$project->id]])->delete();
        $scanner = Video::where([['project_id','=',$project->id]])->get();
        return $scanner;
        if($scanner == null) return "Remoção executada com sucesso";
        else return "Falha ao efetuar remoção";
    }

    public function allVideos($id=null){
        if($id != -1) return Video::where([['project_id','=',$id]])->get();
        return Video::all();
    }
}