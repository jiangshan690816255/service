const mongoose = require('mongoose');
 
 
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false // 只在需要时使用，新版 mongoose 已默认禁用此选项
})
.then(() => console.log('MongoDB connected'))
.catch((err: any) => console.log(err));
 

export default mongoose