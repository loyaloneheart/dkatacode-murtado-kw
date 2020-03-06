email:{
    presence:{
        allowEmpty: false,
        message: '^Email tidak boleh kosong'
    },
    email:{
        message:'^Email tidak valid'
    }
    
},
 general:{
     presence:{
         allowEmpty: false,
         message: '^Tidak boleh kosong'
     }
 },

 phoneNumber:{
     presence:{
         allowEmpty: false,
         message:/^[\s\./0-9]*$/
     }
 },
 format:{
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message: "^Password harus memiliki satu huruf besar, angka, dan karakter spesial"

 },
 length:{
     minimum: 8,
     message:"^Password harus memiliki satu huruf kapital, angka, dan karakter spesial"
 },