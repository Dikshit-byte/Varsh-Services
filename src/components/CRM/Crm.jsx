import React from 'react'
import {
    Box,
    chakra,
    Flex,
    Link
  } from '@chakra-ui/react';
import { FaBorderNone } from 'react-icons/fa';
  
const Crm = () => {
  return (
    <><Flex
    bg="#fff"
    _dark={{
      bg: "#fff",
    }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mx={{
        lg: 15,
      }}
      display={{
        lg: "flex",
      }}
      maxW={{
        lg: "50xl",
      }}
      rounded={{
        lg: "lg",
      }}
    >
      <Box
        w={{
          lg: "50rem",
        }}
      >
        <Box
          h={{
            base: 64,
            lg: "full",
          }}
          bgSize="contain"
          
          style={{
            backgroundImage:
              "url('https://www.rsoft.in/images/rsoftcrm1.png",
              backgroundRepeat: 'no-repeat',
          }}
        ></Box>
      </Box>
  
      <Box
        py={36}
        px={20}
        maxW={{
          base: "1xl",
          lg: "10xl",
        }}
        w={{
          lg: "50%",
        }}
      >
        <chakra.h2
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          Best CRM Software{" "}
        </chakra.h2>
        <chakra.p
          mt={5}
          fontSize={{
            base: "2xl",
            md: "2xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          ✅Grow your revenue<br/>
          ✅Improve your Sales Efficiency<br/>
          ✅Make your number<br/>
          ✅Support your customers<br/>
          ✅Unlock productivity<br/>
          ✅Built in Calling & Texting<br/>
          ✅360 view of customers<br/>
          ✅Business workflow<br/>
        </chakra.p>
  
      </Box>
    </Box>
  </Flex></>
  )
}

export default Crm;