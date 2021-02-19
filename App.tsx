import React from "react"
import {View,ScrollView,StyleSheet,Keyboard} from "react-native"
import Header from "./Header"
import Input from "./TextInput"
import Button from "./Button"
import TodoList from "./TodoList"
import TabBar from "./TabBar"

export interface ITodo {
  title:string;
  todoIndex:number;
  complete:boolean;
}

export type todoType = "All" | "Completed" | "Active"

const App = () => {

  const [todoList,setTodoList] = React.useState<ITodo[]>([])
  const [currentTodoList,setCurrentTodoList] = React.useState<ITodo[]>([])
  const [currentTodo,setCurrentTodo] = React.useState("")
  const [currentTodoType,setCurrentTodoType] = React.useState<todoType>("All")
  
  const inputChange = (e: string) => {
    setCurrentTodo(e)
  }
  Keyboard.addListener("keyboardDidHide",() => {
    submitTodo()
})

  React.useEffect(() => {
    let newCurrentTodoList:any[];
    if(currentTodoType === "Active"){
      newCurrentTodoList = todoList.filter(item => item.complete === false)
    }else if(currentTodoType === "Completed"){
      newCurrentTodoList = todoList.filter(item => item.complete === true)
    }else{
      newCurrentTodoList = [...todoList]
    }
    setCurrentTodoList(newCurrentTodoList)
  },[currentTodoType,todoList])

  const submitTodo = () => {
    if(currentTodo.match(/^\s*$/)){
      return;
    }
    const todo = {
      title:currentTodo,
      todoIndex:todoList.length+1,
      complete:false
    }
    setTodoList([...todoList,todo])
    setCurrentTodo("")
    setCurrentTodoType("All")
  }
  const toggleComplete = (arg:number) => {
    const filteredTodoList = [...todoList]
    const foundTodoIdx = filteredTodoList.findIndex(item => item.todoIndex === arg)
    const newTodo = {
      ...todoList[foundTodoIdx],
      complete:!todoList[foundTodoIdx].complete
    }
    filteredTodoList.splice(foundTodoIdx,1,newTodo)
    setTodoList([...filteredTodoList])
  }
  const handleDelete = (arg:number) => {
    const filteredTodoList = todoList.filter(item => item.todoIndex !== arg)
    setTodoList([...filteredTodoList])
  }
  const setType = (arg:todoType) => {
    setCurrentTodoType(arg)
  }

  return(
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content} >
        <Header/>
        <Input handleChange={inputChange} submitTodo={submitTodo} value={currentTodo} />
        <TodoList todos={currentTodoList} handleComplete={toggleComplete}
         handleDelete={handleDelete} />
        <Button onClick={submitTodo}>
          Submit
        </Button>
      </ScrollView>
      <TabBar setType={setType}
        type={currentTodoType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5"
  },
  content:{
    flex:1,
    paddingTop:60
  }
})

export default App