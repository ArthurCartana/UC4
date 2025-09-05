import { ClaAkimichi } from "./ClaAkimichi";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";

const personagemUchiha:ClaUchiha = new ClaUchiha("Uchiha", "Sasuke")
const personagemHyuuga:ClaHyuuga = new ClaHyuuga("Hyuuga", "Hiashi")
const personagemNara:ClaNara = new ClaNara("Nara", "Shikamaru")
const personagemAkimichi:ClaAkimichi = new ClaAkimichi("Akimichi", "Chouza")
personagemUchiha.habilidadeEspecial()