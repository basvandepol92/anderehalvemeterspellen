import { GamesService } from './../../services/games.service';
import { AgeMapping } from '../../interfaces/games.interface';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  AgeEnum,
  TimeEnum,
  TimeMapping,
} from 'src/app/modules/games/interfaces/games.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent{
  newGameForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
    description: new FormControl(null, Validators.required),
    age: new FormControl(AgeEnum.ALL, Validators.required),
    duration: new FormControl(TimeEnum.LESS_THAN_HALFOUR, Validators.required),
    preparationTime: new FormControl(
      TimeEnum.LESS_THAN_HALFOUR,
      Validators.required
    ),
    material: new FormArray([]),
    minNumberOfPlayers: new FormControl(0, {}),
    author: new FormControl(null),
  });
  allTimes = TimeMapping;
  allAges = AgeMapping;
  newMaterial: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddGameComponent>,
    private snackBar: MatSnackBar,
    private gamesService: GamesService
  ) {}

  saveNewGame() {
    this.gamesService.addNewGame(this.newGameForm.value).subscribe(() => {
      this.gamesService.updateGameList();
      this.showSnackbarMessage(`TOP! ${this.newGameForm.get('title').value} is toegevoegd aan de lijst`);
      this.dialogRef.close();
    }, () => {
      this.showSnackbarMessage(`Helaas er is iets mis gegaan, probeer het later nog eens`);
    }) 
  }

  close(): void {
    this.dialogRef.close();
  }

  get materialForm(): FormArray {
    return this.newGameForm.get('material') as FormArray;
  }

  addMaterial() {
    this.materialForm.push(new FormControl(this.newMaterial, [Validators.maxLength(100)]));
    this.newMaterial = '';
  }

  deleteMaterial(index) {
    this.materialForm.removeAt(index);
  }

  private showSnackbarMessage(message: string) {
    this.snackBar.open(
      message,
      undefined,
      {
        duration: 2000,
        verticalPosition: 'top',
      }
    );
  }
}
