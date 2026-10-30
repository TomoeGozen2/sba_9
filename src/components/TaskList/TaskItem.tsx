


export default function TaskItem(){


    return(
        <div>

           <form action="/action_page.php" />
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" /><br/>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" /> <br/>
                <input type="submit" value="Create New Task" />
            

        </div>
    )
}