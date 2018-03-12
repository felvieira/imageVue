export default class FotoService{
  constructor(resource){
    this._resource = resource('v1/fotos{/id}');
  }

  listar(){
    return this._resource
    .query()
    .then(res => res.json(), err =>{
      console.log(err);
      throw new Error('Não foi possível obter as fotos');
    });
  }

  cadastra(foto){

    if(foto._id){
      return this._resource
      .update({id: foto._id}, foto);
    }else{
      return this._resource
      .save(foto);
    }

  }

  deletar(id){
  return this._resource
  .delete( { id : id })
  .then(null, err => {
    console.log(err);
    throw new Error('Não foi possível remover a foto');
  })
  }

  busca(id){
    return this._resource
    .get( { id : id })
    .then(res => res.json());
    }

}
