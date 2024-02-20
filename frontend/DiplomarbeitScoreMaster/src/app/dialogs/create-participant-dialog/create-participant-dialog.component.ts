import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-participant-dialog',
  templateUrl: './create-participant-dialog.component.html',
  styleUrls: ['./create-participant-dialog.component.scss']
})
export class CreateParticipantDialogComponent {
  creationType: string = 'single';
  username: string = '';
  password: string = '';
  fileSelected: boolean = false;
  usernames: string[] = [];
  passwords: string[] = [];

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateParticipantDialogComponent>) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const contents = e.target.result;
      const lines = contents.split('\n').filter((line: string) => line.trim() !== '');
      if (lines.length > 1) {
        let isValidFormat = true;
        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(',');
          if (fields.length !== 2 || fields[0].trim() === '' || fields[1].trim() === '') {
            isValidFormat = false;
            break;
          } else {
            this.usernames.push(fields[0].trim());
            this.passwords.push(fields[1].trim());
          }
        }
        if (isValidFormat) {
          console.log('CSV format is correct');
          this.fileSelected = true; // Set fileSelected to true if CSV format is correct
        } else {
          this.snackBar.open('Invalid CSV format. Please ensure each row contains only a username and a password.', 'Close', {
            duration: 3000,
          });
          this.fileSelected = false; // Set fileSelected to false if CSV format is incorrect
        }
      } else {
        this.snackBar.open('Invalid CSV format. The file must contain at least one data row besides the header.', 'Close', {
          duration: 3000,
        });
        this.fileSelected = false; // Set fileSelected to false if CSV format is incorrect
      }
    };

    reader.readAsText(file);
  }

  onCreateSingle(): void {
    // Logic to create single participant
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      // Proceed with creating single participant
    } else {
      this.snackBar.open('Please enter both username and password.', 'Close', {
        duration: 3000,
      });
    }
  }

  onCreateFromFile(): void {
    // Logic to create participants from file
    if (this.fileSelected) {
      console.log('Usernames:', this.usernames);
      console.log('Passwords:', this.passwords);

      // todo: create the users in database and keycloak

      this.dialogRef.close();
    } else {
      this.snackBar.open('Please select a valid CSV file.', 'Close', {
        duration: 3000,
      });
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  isCreateSingleDisabled(): boolean {
    return !this.username || !this.password;
  }
}
