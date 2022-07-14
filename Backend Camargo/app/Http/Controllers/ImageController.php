<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Image;

use App\Models\Project;
use Error;

class ImageController extends Controller
{
    public function saveNewImage(Request $request){
        if($request->hasFile('image') && $request->file('image')->isValid()){
            $image = new Image;
            $imagesProject = Project::where([['NameProject','=',"$request->nameproject"]])->get()->first();
            
            $pathImageProject = $imagesProject->Type == "machine" ? "ImageMachines": "ImageProjects";
            $extension = $request->image->extension();
            $imageName = md5($request->image->getClientOriginalName() . strtotime("now")). '.' . $extension;
            $request->image->move(public_path("img/$pathImageProject"),$imageName);
            
            $image->NameImage = $imageName;
            $image->project_id = $imagesProject->id;
            $image->Description = $request->descriptionimage;

            if($image->save())return "Imagem adicionada ao projeto $request->nameproject com sucesso";
            else return "Falha ao adicionar nova imagem ao projeto";
        }           
        return "Falha ao adicionar nova imagem ao projeto";
    }

    public static function removeImages($name){
        $project = Project::where([['NameProject','=',$name]])->get()->first();
        $arrImages = Image::where([['project_id','=',$project->id]])->get();
        foreach($arrImages as $image){
            try{
                unlink(public_path("img/ImageMachines/$image->NameImage"));
            }catch(Error $err){
                unlink(public_path("img/ImageProjects/$image->NameImage"));
            }
        }
        Image::where([['project_id','=',$project->id]])->delete();
        $scanner = Image::where([['project_id','=',$project->id]])->get();
        if($scanner == null) return "Remoção executada com sucesso";
        else return "Falha ao efetuar remoção";
    }

    public function allImages($id=null){
        if($id != -1) return Image::where([['project_id','=',$id]])->get();
        return Image::all();
    }
}
