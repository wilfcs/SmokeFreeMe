import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import { useHistory } from "react-router";
const Signup = () => {
  const toast = useToast();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setpic] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleClick1 = () => {
    setShow1(!show1);
  }
  const handleClick2 = () => {
    setShow2(!show2);
  }
  const submitHandler = async() => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
      window.location.reload(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }

  };
  const sum = (e) => {
    setemail(e.target.value)
  };
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mernstackapp");
      data.append("cloud_name", "divc55ewe");
      fetch("https://api.cloudinary.com/v1_1/divc55ewe/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data is",data);
          setpic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };
  return (
    <VStack spacing='5px'>
      <FormControl id='firstname' isRequired>
        <FormLabel>
          Email Address
        </FormLabel>
        <Input autoComplete="off" placeholder='Enter email here'
          // onChange={(e)=>{
          //   setemail(e.target.value)
          // }}
          onChange={sum}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          Name
        </FormLabel>
        <Input autoComplete="off" placeholder='Enter name here'
          onChange={(e) => {
            setname(e.target.value)
          }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            autoComplete="off"
            type={show1 ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button bg="grey.300" h="1.75rem" size="sm" onClick={handleClick1}>
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          ConfirmPassword
        </FormLabel>
        <InputGroup size="md">
          <Input
            autoComplete="off"
            type={show2 ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button bg="grey.300" h="1.75rem" size="sm" onClick={handleClick2}>
              {show2 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          Image
        </FormLabel>
        <Input type="file" autoComplete="off" placeholder='Enter name here'
          p={1.5}
          accept="image/*"
          onChange={(e) => {
            postDetails(e.target.files[0])
          }}
        />
      </FormControl>
      <Button colorScheme='blue' width={"100%"} padding={"2"} style={{ marginTop: 15 }}
        onClick={submitHandler}  isLoading={loading} >
        Signup
      </Button>
    </VStack>
  )
}

export default Signup
