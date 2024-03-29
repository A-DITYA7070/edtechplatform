// import { Avatar, Container, Heading, Stack, VStack,Text, Button, Box, HStack } from '@chakra-ui/react'
// import React from 'react';
// import { RiSecurePaymentFill } from 'react-icons/ri';
// import { Link } from 'react-router-dom';
// import introvideo from "../../assests/Videos/intro.mp4"
// import Termsandcondition from "../../assests/Docs/Termsandcondition"
 
// const Founder = () =>( 

//     <Stack 
//     direction={["column","row"]}
//     spacing={["4","16"]}
//     padding="8"
//     >
//     <VStack>
//         <Avatar src='https://avatars.githubusercontent.com/u/99244575?s=400&u=f860cd34fbb0074ca4ffd5efac5b8b424ece3b45&v=4' boxSize={["40","48"]}/>
//         <Text children={"co-founder"} opacity="0.8"/>
//     </VStack>
//     <VStack 
//     justifyContent={"center"}
//     alignItems={["center","flex-start"]}
//     >
//       <Heading 
//       children="Aditya raj" 
//       size={["md","xl"]}
//       />
//       <Text 
//       textAlign={["center","left"]}
//       children="Hi i am a Full stack developer nice to meet you 
//       Our mission is to provide quality content at reasonable price.."/>
//     </VStack>
//     </Stack>
// )

// const VideoPlayer = () =>{
//     return(
//         <Box>
//             <video
//             autoPlay
//             muted
//             loop
//             src={introvideo}
//             controls controlsList='nodownload nofullscreen noremoteplayback'
//             disablePictureInPicture
//             disableRemotePlayback
//             >
//             </video>
//         </Box>
//     );
// }

// const TermsAndCondition = ()=>(
//     <Box>
//         <Heading 
//         size="md" 
//         children="Terms and Condition"
//         textAlign={["center","left"]}
//         my="4"
//         />
//         <Box h="sm" p="4" overflowY={"scroll"}>
//             <Text letterSpacing={"wider"}
//              textAlign={["center","left"]}
//              fontFamily="sans-serif"
//             //  color="white"
//             >
//             <Termsandcondition/>
//             </Text>
//           <Heading my="4" size={"xs"} children="Refund only applicable within 7 days"/>
//         </Box>
//     </Box>
// )
// function About() {
//   return (
//     <Container 
//     maxW={"container.lg"}
//     padding="16"
//     boxShadow={"lg"}
//     >
//     <Heading 
//     children="About us"
//     textAlign={["center","left"]}
//      />
//      <Founder/>
//      <Stack 
//      m="8" 
//      direction={["column","row"]}
//      alignItems="center"
//      >
//         <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
//             We are a video streaming platform with some premium courses available for premium users.
//         </Text>
//         <Link to="/subscribe">
//             <Button variant={"ghost"} colorScheme="yellow">
//               checkout our plans
//             </Button>
//         </Link>

//      </Stack>
//      <VideoPlayer/>
//      <TermsAndCondition/>
//      <HStack my="4" padding={"4"}>
//         <RiSecurePaymentFill/>
//         <Heading 
//         children={"Payment is secured by Razorpay"}
//         size="xs"
//         fontFamily={"sans-serif"}
//         textTransform="uppercase"
//         />
//      </HStack>
//     </Container>
//   )
// }

// export default About;

import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assests/Videos/intro.mp4';
import termsAndCondition from '../../assests/Docs/Termsandcondition';
import aditya from "../../assests/Images/aditya.jpg"

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src={aditya}
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Aditya Raj" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, This is Aditya mern stack developer.
        Founder of Aditya's Academy,chess and cricket player.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;

