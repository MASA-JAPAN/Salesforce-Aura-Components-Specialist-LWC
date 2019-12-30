public with sharing class BoatSearchFormController {
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getBoatTypes(){
        return [Select Id, Name From BoatType__c];        
    }
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        String sql = 'SELECT id, BoatType__c, BoatType__r.Name,Picture__c, Length__c, Price__c,name,Contact__r.Name, ';
               sql += ' Geolocation__Latitude__s, Geolocation__Longitude__s ';
               sql += ' FROM Boat__c ';
        if( !String.isBlank(boatTypeId)) {
            sql += ' where BoatType__c = \''+ boatTypeId +'\'';
        }
        List<Boat__c> boatList = Database.query(sql);
        return boatList;        
    }
}