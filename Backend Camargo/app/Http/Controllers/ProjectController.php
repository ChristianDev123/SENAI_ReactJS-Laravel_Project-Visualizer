<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Project;

use App\Models\Image;

use App\Models\Video;

use Illuminate\Support\Facades\Response;

use App\Http\Controllers\VideoController;

use App\Http\Controllers\ImageController;

class ProjectController extends Controller
{
    public function all(){
        return Project::all();
    }

    public function projectByIdorName($idOrName){
        return response()->json(Project::where('id',$idOrName)->orWhere('NameProject','Like',"%$idOrName%")->get());
    }

    public function createNewProject(Request $request){
        $project = new Project;
        $project->NameProject = $request->name;
        $project->TextAbout = $request->text;
        $project->Type = $request->type;
        
        if($request->hasFile("mainimage") && $request->file("mainimage")->isValid()){
            $extension = $request->mainimage->extension();
            $imageName = md5($request->mainimage->getClientOriginalName() . strtotime("now")). '.' . $extension;
            $pathImage = $request->type == "machine"? "ImageMachines": "ImageProjects";
            $request->mainimage->move(public_path("img/$pathImage"),$imageName);
            $project->MainImageName = $imageName;
        }
        if($project->save()) return "Novo projeto criado com sucesso";
        else return "Falha ao criar novo projeto";
    }

    public function updateProject(Request $request){
        $project = Project::where([['NameProject','=',"$request->currentname"]])->get()->first();
        $newData = $request->all();
        $typeProject = $project->Type == "machine" ? "ImageMachines" : "ImageProjects";
        unlink(public_path("img/$typeProject/$project->MainImageName"));
        $extension = $request->mainimage->extension();
        $imageName = md5($request->mainimage->getClientOriginalName() . strtotime("now")). '.' . $extension;       
        $newData['mainimage'] = $imageName;
        Project::findOrFail($project->id)->update([
            "NameProject"=>$newData["newname"],
            "TextAbout"=>$newData["text"],
            "Type"=>$newData["type"],
            "MainImageName"=>$newData["mainimage"],
        ]);
        $typeProject = $request->type == "machine" ? "ImageMachines" : "ImageProjects";
        $request->mainimage->move(public_path("img/$typeProject"),$imageName);
 
        return "Verifique se a ação foi executada";
    }

    public function removeProject($name){
        $project = Project::where([["NameProject","=",$name]])->get()->first();
        $pathType = $project->Type == "machine"? "ImageMachines" : "ImageProjects";
        unlink(public_path("img/$pathType/$project->MainImageName"));
        VideoController::removeVideos($name);
        ImageController::removeImages($name);
        Video::where([['project_id','=',$project->id]])->delete();
        Image::where([['project_id','=',$project->id]])->delete();
        Project::findOrFail($project->id)->delete();
        if(Project::find($project->id) == null) return "Remoção concluída com sucesso!";
        else return "Falha ao executar a remoção";
    }

    public function getAnFile($typefile,$idproject,$namefile){
        $project = Project::findOrFail($idproject);
        $pathType = "";
        $machinePath = "";
        $projectPath = "";
        if($typefile == "image"){
            $machinePath = "ImageMachines";
            $projectPath = "ImageProjects";
        }else if($typefile == "video"){
            $machinePath = "VideoMachines";
            $projectPath = "VideoProjects";
        }else return "Falha ao tentar identificar tipo de arquivo";
        
        $pathType = $project->Type == "machine"? $machinePath : $projectPath ;
        $typeArchive = $typefile == 'image' ? "img" : 'video';      
        $path = "$typeArchive/$pathType/$namefile";
        return $path;
    }
}
