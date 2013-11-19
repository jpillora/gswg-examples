describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when not in the array', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});
