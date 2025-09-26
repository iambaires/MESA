import React, { useEffect, useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
} from '@mui/material';

type Student = {
  name: string;
  funFacts: string[];
};

type StudentModalProps = {
  selectedStudent: Student | null;
  onClose: () => void;
};

const StudentModal: React.FC<StudentModalProps> = ({
  selectedStudent,
  onClose,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Modal open={!!selectedStudent} onClose={onClose}>
      <>
        {selectedStudent && (
          <Paper sx={{ p: 3, width: 300, mx: 'auto', mt: '20vh' }}>
            <Typography variant="h6" gutterBottom>
              {selectedStudent.name}
            </Typography>
            <List>
              {selectedStudent.funFacts.map((fact, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  • {fact}
                </ListItem>
              ))}
            </List>
            <Button variant="outlined" fullWidth onClick={onClose}>
              Close
            </Button>
          </Paper>
        )}
      </>
    </Modal>
  );
};

export default StudentModal;
