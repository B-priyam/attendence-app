import React, { useState } from 'react'
import {  FormControl , FormLabel , Button} from '@chakra-ui/react'
import { VStack } from '@chakra-ui/layout';
import { Input , InputGroup ,InputRightElement} from '@chakra-ui/input';

const Login = () => {
  const [show,setshow] = useState(false)
  const [email,setemail] = useState("");
  const [password,setpassword] = useState();

  const handleClick = ()=>setshow(!show)
  const postDetails =(pics)=>{}
  const submitHandler = ()=>{}
  return (
    <VStack spacing="5px" color="black">
        
        <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)}>
          </Input>
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup> 
          <Input type={show ? "text" : 'password'} placeholder='enter your password'onChange=
            {
            (e)=>setpassword(e.target.value)
            }/>
            <InputRightElement
            width="4.5rem" >
              <Button h="1.75rem" size="5m" bg="white" onClick={handleClick}>{show ? "hide" : "show"}</Button>
            </InputRightElement>
          </InputGroup>
          </FormControl>
            <Button colorScheme='green' width="100%" style={{marginTop:15}} onClick={submitHandler}>
             Login
            </Button>
            <Button variant="solid" colorScheme='red' width="100%" onClick={()=>{
              setemail("guest@example.com")
              setpassword("123456")
            }}>
              Login as guest user
            </Button>
    </VStack>
)}

export default Login
