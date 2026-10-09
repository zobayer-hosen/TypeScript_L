let fullname:string

fullname = "zobayer hosen"
fullname = "hosen"
"noEmitOnError: true doesn't use in the tsconfig file that why it's automatically compile and create the new javascript file"
"if i use the noEmitOnError: true in the config file it's been create the error in the runtime"

console.log(fullname.toUpperCase())

let fname = "zobayer" 
"we donot use name because it's predefine and it's has the global scop and solve this issue we use the moduleDetection: force but it's not the good prcatice"
"always avoid the predefine variable"