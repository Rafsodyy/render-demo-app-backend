// const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]
// let noteContent = process.argv[3]
// let noteImportance = process.argv[4]


// const url =
//   `mongodb+srv://fullstackUser:${password}@cluster0.jsn67ot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.set('strictQuery',false)

// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })



// const Note = mongoose.model('Note', noteSchema)

// const notes = new Note ({
// 	content: noteContent,
// 	important: noteImportance
// })

// if(noteContent && noteImportance !== null){
// 	notes.save().then(result => {
// 		console.log('note saved!')
// 		mongoose.connection.close()
// 	  })
// } else {
// 	Note.find({}).then(result => {
// 		result.forEach(note => {
// 		  console.log(note)
// 		})
// 		mongoose.connection.close()
// 	  })
// }


