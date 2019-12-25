public with sharing class BoatReviews {

    @AuraEnabled
    public static list<BoatReview__c> getAll(Id  boatId){
        String sql = 'SELECT id, Name,Comment__c,Rating__c, ';
        sql += ' LastModifiedDate,CreatedDate,CreatedBy.Name, ';
        sql += ' CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName ';
        sql += ' FROM BoatReview__c ';
        if( !String.isBlank(boatId)) {
            sql += ' where Boat__c = \''+ boatId +'\'';
        }
        System.debug('sql: ' + sql);
        List<BoatReview__c> boatReviewList = Database.query(sql);
        System.debug('boatReviewList: ' + boatReviewList);
        return boatReviewList;        
    }

}