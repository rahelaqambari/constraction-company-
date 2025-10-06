
function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-16  h-screen w-full">
      <div className="h-28 w-full flex justify-center item-center bg-gray-200 flex-col">
        <h1 className="text-center text-4xl">Image Gallary</h1>
      </div>
      <div className="h-[70%] w-[50%] bg-gray-100 shadow-2xl items-center flex gap-20 flex-col  justify-center"> 
        <input className="h-16 w-full  border" type="insert an image" />
        <select className="h-16 w-full  border" name="" id="">
          <option value="Nature">Nature</option>
          <option value="Art">Art</option>
          <option value="Tecnalogy">Tecnalogy</option>
          <option value="Sport">Sport</option>
          <option value="World">World</option>
        </select>
        <button className="bg-green-400 py-4 rounded-sm sc px-7">Save</button>
      </div>
    </div>
   
  )
}

export default LoginPage
