import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, Heading, Image, Text, Box, StackDivider, Stack } from '@chakra-ui/react';
import Sportsdata from './Sportsdata';
import { Link } from 'react-router-dom';
function MoreInfo() {
  const { id } = useParams();
  const selectedSport = Sportsdata.find((sport) => sport.id === parseInt(id));

  if (!selectedSport) {
    return <div>Selected sport not found</div>;
  }

  return (
    <div id="main-2">
      <div style={{ padding: '20px' }}>
        <Card id="main-1">
          <CardHeader>
            <Heading size="md" id="id-1">
              {selectedSport.title}
            </Heading>
          </CardHeader>
          <Image
            style={{ height: '400px', width: '50%', margin: 'auto' }}
            src={selectedSport.imgsrc}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box id="id-2">
                <Heading id="id-3" size="xs" textTransform="uppercase">
                  Description
                </Heading>
                <Text pt="2" fontSize="sm" id="id-4">
                  {selectedSport.desc}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <Link to='/'>
          <button style={{marginLeft:'600px',marginRight:'600px',marginBottom:'20px'}} type="button" class="btn btn-primary">Go Back</button>
       </Link>
        </Card>
      </div>
    </div>
  );
}

export default MoreInfo;
