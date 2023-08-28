import "./createpost.css"

export default function CreatePost() {
    return (
        <div className="mainpostpage">
            <div className="topbar">
                <h1 className="title">Create a post</h1>
                <button className="publishbutton">Publish</button>
            </div>
            <div className="bottombar">
              <div className="usertags">
              </div>
              <div className="bottombar2">  
                <input className="titleinput" placeholder="Title"/>
                <textarea className="textinput" placeholder="Discuss your topic here"/>
              </div>
            </div>
        </div>
    )
}