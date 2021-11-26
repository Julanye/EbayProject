export class Encheres{
  $key: number;
  nomBien: string;
  description: string;
  prix: number;
  dateCreation: string;
  createur: string; //ref vers l'utilisateur créateur
  encherisseurs: string; //ref vers l'encherisseur
  livraison: string; //ref vers la livraison
  statut: string;
}
