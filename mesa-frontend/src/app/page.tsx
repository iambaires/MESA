'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Modal, Paper, List, ListItem } from '@mui/material';

interface Student {
  name: string;
  funFacts: string[];
}

export default function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/students')
      .then(res => res.json())
      .then((data: Student[]) => setStudents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>

      {students.length > 0 ? (
        <Grid container spacing={2}>
          {students.map((student, i) => (
            <Grid size={{ xs: 6 }} key={i}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setSelectedStudent(student)}
              >
                {student.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No students found</Typography>
      )}

      {/* Modal for fun facts */}
      <Modal open={!!selectedStudent} onClose={() => setSelectedStudent(null)}>
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
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </Button>
            </Paper>
          )}
        </>
      </Modal>
    </Box>
  );
}
