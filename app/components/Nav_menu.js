"use client"

import React,{useState} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Radio,
    Stack,
    Button
  } from '@chakra-ui/react'
  import { GrHome } from 'react-icons/gr';
  import { useDisclosure } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'

function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
       {/*  <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <div className="w-full flex justify-center items-center">
            <HamburgerIcon boxSize={8} onClick={onOpen} />
        </div>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                <HamburgerIcon boxSize={8} onClick={onClose} />
                  LOGO
            </DrawerHeader>
            <DrawerBody>
                <a href='#'>
                    <div className='flex w-full justify-center items-center'>
                        <GrHome size={26}/> 
                        <span className=' ml-4 font-bold'>Home</span>
                    </div>
                </a>
              
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default PlacementExample;