import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/artoavatar.webp";

const greeting = "Hello, I am Arthur!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="home-section"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar size="lg" name="Artorias U" src={avatar}  />
        <Heading as="h4" size="lg" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
