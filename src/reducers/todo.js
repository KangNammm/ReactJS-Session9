const initialState = JSON.parse(localStorage.getItem("jobs")) || [];

export const todoList = (state = initialState, action) => {
   switch (action.type) {
       case "add":
           // clone lại mảng cũ
           const newArray = [...state];
           // thêm hoặc push dữ liệu vào mảng
           newArray.push(action.payload);
           // lưu lên local
           localStorage.setItem("jobs", JSON.stringify(newArray));
           // return mảng mới
           return newArray;
       case "delete":
           // clone lại mảng
           const updateJob = [...state];
           // lọc ra phần tử có id khác id cần xóa
           const newListJob = updateJob.filter((job) => job.id !== action.payload);
           // lưu lên local
           localStorage.setItem("jobs", JSON.stringify(newListJob));
           return newListJob;
       case "checked":
           const checkJob = [...state];
           // map qua từng phần tử và kiểm tra, nếu trùng id thì thay đổi trạng thái
           const checkedJob = checkJob.map(job => {
               if (job.id === action.payload) {
                   return { ...job, status: !job.status }; // cập nhật lại trạng thái của job theo id
               };
               return job;
           })
           // lưu
           localStorage.setItem("jobs", JSON.stringify(checkedJob));
           return checkedJob;
       default:
           return state;
   }
}